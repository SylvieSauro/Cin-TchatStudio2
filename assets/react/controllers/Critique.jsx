import React, { Component } from 'react';
import image from "../../../public/img/scream-2.jpg";

class App extends Component {
    render() {
        return (
            <div>
           //Call image in source like this
                <img src={image} />
            </div>
        );
    }
}

const Critique = () => {
    return (
        <div class="grid grid-cols-2">
            <div align="center">
                <div class="inline-block" align="left">
                    <img src={image}
                        width="300"
                        height="400"
                        alt="SCREAM_VI" />
                    <label class="text-white text-left text-lg bold">Scream II</label><br />
                    <label class="text-white-500 text-left text-md bold">2023</label>
                </div>
            </div>
            <div>
                <div class="container">
                    <form id="critique" name="critique" height="600px" class="border p-16 border-white max-w-sm mx-auto p-8 rounded-md shadow-md" action="#" method="POST">
                        <div class="mb-4">
                            <h2 class="text-white-500 text-2xl mb-4 font-bold left-align">Déposez votre critique</h2>
                        </div>
                        <div class="mb-4 text-left">
                            <label class="text-white-500 inline-block text-xs text-left font-bold mb-2" for="votre-note">Votre note de 1 à 10 (*)&nbsp;&nbsp;</label>
                            <div class="w-1/3 text-left inline-block">
                                <select class="p-1 pl-6 bg-[#CBB2FF] rounded-md text-xs" id="votre-note" name="votre-note">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="flex text-white-500 text-xs font-bold mb-2" for="commentaire">Commentaire (*)</label>
                            <textarea rows="15" class="w-full text-xs px-2 py-1 text-grey-600 placeholder:text-white-500 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="text" id="commentaire" name="commentaire" placeholder="Tapez votre message ici ( 500 caractères max.)"></textarea>
                        </div>
                        <button class="w-1/2 inline-block bg-purple-900 text-white text-xs font-bold pt-2 pb-2 m-4 rounded-md hover:bg-indigo-600 transition duration-300"
                            vistype="submit"><div class="text-xs text-center">Je donne mon avis</div></button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default Critique;