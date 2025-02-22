import { useEffect, useState } from "react"

const lessons = [
    {
        id: 1,
        name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, praesentium.'
    },
    {
        id: 2,
        name: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, non.'
    },
    {
        id: 3,
        name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, distinctio!'
    }
]

const ChatApp = () => {

    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return (() => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        })
    }, [lessonId])

    return (
        <>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        onClick={() => setLessonId(lesson.id)}
                        style={{
                            cursor: 'pointer',
                            color: lesson.id === lessonId ? 'red' : 'black'
                        }}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ChatApp