import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums']
function Content1() {

    const [type, setType] = useState('posts')
    const [posts, setPosts] = useState([])
    const [showToTop, setShowToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => setPosts(posts))
    }, [type])

    useEffect(() => {

        const handleScroll = () => {
            setShowToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        // Cleanup function runs before component is unmounted
        // Avoid memory leaks
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#333',
                        backgroundColor:'#aaa'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>

            {showToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

export default Content1