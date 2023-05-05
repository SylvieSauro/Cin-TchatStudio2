import React, { Component } from 'react';
import image from "../../../public/img/tyrannosaure_tete.jpg";

class Avatar extends Component {
    render() {
        return (
            <div>
                <img src={image} />
            </div>
        );
    }
}

const Profil = () => {
    return (
        <form id="profil" name="profil" class="flex text-gray-300 text-xs px-20" action="#" method="POST">
            <div class="container mx-auto">
                <div class="flex font-bold text-2xl py-5">Tableau de bord</div>
                <nav className="flex sm:justify-center">
                    {[
                        ['Mes favoris', '/#'],
                        ['Mes listes', '/#'],
                        ['Ma collection', '/#'],
                        ['Mes commentaires', '/#'],
                        ['Paramètres', '/#']
                    ].map(([title, url]) => (
                        <a href={url} class="rounded-lg px-10 py-2 text-slate-700 font-bold hover:bg-slate-100 hover:text-slate-900">{title}</a>
                    ))}
                </nav>
                <div class="grid grid-rows-2 border-white">
                    <div class="p-5">
                        <div class="grid grid-cols-2">
                            <div>

                                <div class="mb-5 pl-5 pr-40">
                                    <label class="flex py-1 text-gray-300 text-xs font-bold mb-2" for="pseudo">Nom d'utilisateur</label>
                                    <input class="flex w-full text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" id="pseudo" name="pseudo" placeholder="Nom d'utilisateur"></input>
                                </div>

                                <div class="mb-5 pl-5 pr-40">
                                    <label class="flex py-1 text-gray-300 text-xs font-bold mb-2" for="email">E-mail</label>
                                    <input class="flex w-full text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="email" id="email" name="email" placeholder="E-mail"></input>
                                </div>

                                <div class="mb-5 pl-5 pr-40">
                                    <label class="flex py-1 text-gray-300 text-xs font-bold mb-2" for="lastname">Nom</label>
                                    <input class="flex w-full text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" id="lastname" name="lastname" placeholder="Nom"></input>
                                </div>

                                <div class="mb-5 pl-5 pr-40">
                                    <label class="flex py-1 text-gray-300 text-xs font-bold mb-2" for="firstname">Pr&eacute;nom</label>
                                    <input class="flex w-full text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" id="firstname" name="firstname" placeholder="Pr&eacute;nom"></input>
                                </div>

                                <div class="mb-5 pl-5 pr-30">
                                    <label class="flex py-1 text-gray-300 text-xs font-bold mb-2" for="description">Description</label>
                                    <textarea class="flex w-full text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" id="description" name="description" placeholder="Tapez votre description ici. (350 caractères max.)"></textarea>
                                </div>

                            </div>
                            <div class="flex flex-col">
                                <div class="text-bold text-center text-lg mt-10">
                                    Avatar
                                </div>
                                <div>
                                    <img src={image} width="100" height="100" class="rounded-full mx-auto py-2"></img>
                                </div>
                                <div class="text-center">
                                    Uploader<br />mon&nbsp;image<br />Taille recommand&eacute;e<br />145x145
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">

                        <div class="flex">
                            <div class="flex-auto"></div>
                            <div class="flex-auto text-lg mb-5">Modification du mot de passe</div>
                            <div class="flex-auto"></div>
                        </div>

                        <div class="flex">

                            <div class="mb-5 pl-5 w-1/2">
                                <label class="flex py-1 text-gray-300 text-xs font-bold mb-2">Mot de passe actuel</label>
                                <input size="40" class="flex text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" id="oldpassword" name="oldpassword" placeholder="*************"></input>
                            </div>

                            <div class="mb-5 text-left w-1/2">
                                <label class="flex text-gray-300 text-xs font-bold m-3">Le mot de passe doit contenir 8 caractères minimum.<br />Au moins 1 majuscule, 1chiffre, 1 caractère spécial.</label>
                            </div>

                        </div>

                        <div class="flex">

                            <div class="mb-5 pl-5 w-1/2">
                                <label class="flex py-1 text-gray-300 text-xs font-bold mb-2">Nouveau mot de passe</label>
                                <input size="40" class="flex text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" id="oldpassword" name="oldpassword" placeholder="*************"></input>
                            </div>

                            <div class="mb-5 pl-5 w-1/2">
                                <label class="flex py-1 text-gray-300 text-xs font-bold mb-2">Confirmer le mot de passe</label>
                                <input size="40" class="flex text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" id="oldpassword" name="oldpassword" placeholder="*************"></input>
                            </div>

                        </div>

                        <div class="flex">
                            <div class="flex-auto"></div>
                            <div class="flex-auto text-lg mb-5 py-5">

                                <button class="w-1/4 inline-block bg-purple-900 text-white text-xs py-2 font-bold text-center rounded-md hover:bg-[#5B3AA3] transition duration-300"
                                    type="submit"><div class="w-full text-xs">Confirmer la modification</div></button>

                            </div>
                            <div class="flex-auto"></div>
                        </div>

                        <div class="text-center">
                            <a href="#" class="text-md">Supprimer mon compte</a>
                            <div class="text-sd text-red-700">Attention, cette action est irr&eacute;versible.</div>
                        </div>
                    </div>
                </div >
            </div >
        </form >
    )
}


export default Profil;
