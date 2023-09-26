import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <Link to={'/'} className="link">
                <div className="logo">Twitter-X</div>
            </Link>

            <Link to={'/'} className="link">
                <div className="menu">
                    <span class="material-symbols-outlined">home</span>
                    <div className="menu-bar">
                        Anasayfa
                    </div>
                </div>
            </Link>


            <Link to={'explore'} className="link">
                <div className="menu">
                    <span class="material-symbols-outlined">search</span>
                    <div className="menu-bar">
                        Keşfet
                    </div>
                </div>
            </Link>


            <Link to={'notifications'} className="link">
                <div className="menu">
                    <span class="material-symbols-outlined">notifications</span>
                    <div className="menu-bar">
                        Bildirimler
                    </div>
                </div>
            </Link>

        </aside>
    )
}