import React from 'react'; // nạp thư viện react
import { createRoot } from 'react-dom/client'; // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
        </div>
    )
}

// Render component App vào #root element
const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);