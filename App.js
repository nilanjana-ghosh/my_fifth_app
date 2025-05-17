import ReactDOM from "react-dom/client";

// function Header() {
//     return <h1>Hello! from functional component 01❤️</h1>
// }

// const Header = function() {
//     return <h1>Hello! from functional component 02😂</h1>
// }

const Header = () => {
    return <h1>Hello! from functional component 03👍</h1>
}

const BaseHeader = () => {
    return (
        <>
            <div className="root-container">
                <Header />
            </div>
            <p className="desc">This is a simple paragraph...</p>
        </>
    
);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BaseHeader />);