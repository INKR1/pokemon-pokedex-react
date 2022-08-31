import MainNavigation from "./MainNavigation";

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