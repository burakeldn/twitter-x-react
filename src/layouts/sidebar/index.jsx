import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <aside className="sidebar">
            <Link to={'/'} className="link">
                <div className="logo"><span className="material-symbols-outlined">raven</span>Twitter</div>
            </Link>


            <Link to={'/'} className="link">
                <div className="menu">
                    <span className="material-symbols-outlined">home</span>
                    <div className="menu-bar">
                        Anasayfa
                    </div>
                </div>
            </Link>


            <Link to={'explore'} className="link">
                <div className="menu">
                    <span className="material-symbols-outlined">search</span>
                    <div className="menu-bar">
                        Keşfet
                    </div>
                </div>
            </Link>


            <Link to={'notifications'} className="link">
                <div className="menu">
                    <span className="material-symbols-outlined">notifications</span>
                    <div className="menu-bar">
                        Bildirimler
                    </div>
                </div>
            </Link>


            <Link to={'message'} className="link">
                <div className="menu">
                    <span className="material-symbols-outlined">mail</span>
                    <div className="menu-bar">
                        Mesajlar
                    </div>
                </div>
            </Link>


            <Link to={'list'} className="link">
                <div className="menu">
                    <span className="material-symbols-outlined">list_alt</span>
                    <div className="menu-bar">
                        Listeler
                    </div>
                </div>
            </Link>


            <Link to={'bookmark'} className="link">
                <div className="menu">
                    <span className="material-symbols-outlined">bookmark</span>
                    <div className="menu-bar">
                        Yer İşaretleri
                    </div>
                </div>
            </Link>


            <Link to={'/'} className="link">
                <div className="menu">
                    <span className="material-symbols-outlined">raven</span>
                    <div className="menu-bar">
                        Premium
                    </div>
                </div>
            </Link>


            <Link to={'profil'} className="link">
                <div className="menu">
                    <span className="material-symbols-outlined">person</span>
                    <div className="menu-bar">
                        Profil
                    </div>
                </div>
            </Link>


            <Link to={'/'} className="link">
                <div className="menu">
                    <span className="material-symbols-outlined">more_horiz</span>
                    <div className="menu-bar">
                        Daha fazla
                    </div>
                </div>
            </Link>

            <div>
                <button onClick={logout}>Çık</button>
            </div>
        </aside>
    )
}