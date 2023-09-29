import React, { useState } from "react"
import LoginComponent from "./loginComponent"

export default function Login() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <div className="login-container">
            <div className="login-logo">
                <span className="material-symbols-outlined login-test">raven</span>
            </div>
            <div className="login-side">
                <div className="login-text">
                    Şu anda olup bitenler
                </div>
                <div className="login-alt-text">
                    Hemen katıl.
                </div>
                <div>
                    <div className="button-google" onClick={openModal}>
                        Google ile kaydolun
                    </div>
                    {modalOpen && (
                        <div className="modal-container">
                            <div className="modal-overlay" onClick={closeModal}></div>
                            <LoginComponent />
                        </div>
                    )}
                </div>
                <div className="button-apple">
                    Apple ile kaydol
                </div>
                <div className="or">veya</div>
                <div className="button-signup">
                    Hesap oluştur
                </div>
                <div className="alt-div">
                    By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including <span>Cookie Use.</span>
                </div>
                <div className="login-title">
                    Zaten bir hesabın var mı?
                </div>
                <div className="login-button">
                    Giriş yap
                </div>
            </div>
        </div>
    )
}