import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerRef = React.useRef(null);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                footerRef.current.classList.add('hidden');
            } else {
                footerRef.current.classList.remove('hidden');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="footer" ref={footerRef}>
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="#">A propos</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Mentions légales</a></li>
                    </ul>
                    <h4>Copyright &copy; CinéTchatStudio</h4>
                </nav>
            </div>
        </div>
    );
};


export default Footer;


//Notez que pour les liens internes, il faut utiliser le composant Link de react-router-dom à la place de l'élément a, et spécifier
// le chemin de la page souhaitée dans l'attribut to. Pour les liens externes, on peut utiliser l'élément a avec l'attribut href.
