import MainNavigation from "./MainNavigation";
import "../../App.css"

export default function layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className="container">
                {props.children}
            </main>
        </div>
    )
}