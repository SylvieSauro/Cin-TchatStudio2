import React from 'react';

const Inscription = () => {
    return (
        <div className="inscription">
            <div className="sizebox">
                <div class="w-full px-max py-max background-image=">
                    <div class="w-1/3 mx-auto rounded-md bg-black/25">
                        <form id="inscription" name="inscription" class="max-w-sm mx-auto px-10 py-5" action="#" method="POST">
                            <h2 class="text-2xl mb-4 font-bold text-center">Bienvenue !</h2>
                            <div class="mb-2 text-xs text-left text-white">Inscrivez-vous pour profiter pleinement de votre expérience sur Ciné-Tchat-Studio</div>
                            {[
                                ['lastName', 'Nom'],
                                ['firstName', 'Prénom'],
                                ['email', 'E-mail'],
                                ['password', 'Mot de passe'],
                                ['pseudo', 'Pseudo']
                            ].map(([champ, titre]) => (
                                <div class="mb-4">
                                    <input class="w-full text-xs px-3 py-1 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500" type="text" id={champ} name={champ} placeholder={titre}></input>
                                </div>))
                            }
                            <button class="w-1/4 inline-block bg-purple-900 text-white text-xs py-2 font-bold text-center rounded-md hover:bg-[#5B3AA3] transition duration-300"
                                type="submit"><div class="w-full text-xs">Inscription</div></button>
                        </form >
                    </div >
                </div>
            </div>
        </div>
    )
}

export default Inscription;