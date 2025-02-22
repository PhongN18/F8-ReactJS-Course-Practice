import { useEffect, useState } from "react";

function Content2() {
    const [avatar, setAvatar] = useState('')

    useEffect(()  =>  {
        return () => {
            URL.revokeObjectURL(avatar)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const files = e.target.files[0]

        setAvatar(URL.createObjectURL(files));
        console.log(avatar);
    }

    return (
        <div>
            <input type="file" onChange={handlePreviewAvatar} />
            <img src={avatar} alt="" style={{width: "100%"}}/>
        </div>
    )
}

export default Content2