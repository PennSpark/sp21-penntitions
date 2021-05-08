import { useState } from 'react';
import UserNavbar from '../components/UserNavbar';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { useAuth } from '../contexts/AuthContext';

const CreatePetition = (props) => {
  const { userId, userData } = useAuth();
  let history = useHistory();
  console.log(userId)

  function handleSubmit(e) {
    e.preventDefault();
    // Add a new document for the petition under petitions collection
    let appearingName;
    if (userData.isAnonymous) {
      appearingName = "Anonymous"
    } else {
      appearingName = userData.firstName + " " + userData.lastName
    }
    db.collection("petitions").add({
      author: appearingName,
      authorId: userId,
      isActive: true,
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      signGoal: parseInt(document.getElementById("goal").value),
      currentSign: 0,
      signers: [],
      link: document.getElementById("url").value,
      dateCreated: firebase.firestore.Timestamp.now().toDate().toString(),
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      // adds the id of the document to a petitions collection for the current user
      docRef.set({petitionId: docRef.id}, {merge: true})
      let userRef = db.collection("users").doc(userId);
      userRef.collection("createdPetitions").doc(docRef.id).set({
        title: document.getElementById("title").value,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
      history.push('petition/' + docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

    
  }
    return (
    <div>
      <UserNavbar />
        <div className="flex justify-center w-screen h-screen p-8 overflow-x-hidden">
        
          <form className="flex justify-around w-full space-x-4">
            <div className="flex flex-col flex-wrap justify-start items-stretch space-y-2 w-3/5">
              <div className="flex flex-col">
                <label for='title' className="pl-4">Campaign Title</label>
                <input
                  id='title'
                  name='title'
                  type='text'
                  className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
                ></input>
              </div>
              <div className="flex flex-col">
                <label for='description' className="pl-4">Description</label>
                <textarea
                    id='description'
                    name='description'
                    rows='6'
                    className="rounded-3xl border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input">
                </textarea>
              </div>
              <div className="flex flex-col">
                <label for='category' className="pl-4">Categories</label>
                <input
                  id='category'
                  name="category"
                  type='text' //maybe change type to some kind of tagging??
                  className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
                ></input>
              </div>
              <p className="pl-4">Petition as:</p>
              <div className="flex">
                <div className="w-1/2 float-left pl-4">
                    <input
                      id="individual"
                      name="format"
                      type="radio"
                      className="rounded-full border border-grey-400">
                    </input>
                    <label for="individual" className="pl-4">An Individual</label>
                    <p className="text-gray-400 text-sm">I am the sole organizer of this petition</p>
                </div>
                <div className="w-1/2 float-left pl-4">
                    <input
                      id="team"
                      name="format"
                      type="radio"
                      className="rounded-full border border-grey-400">
                    </input>
                    <label for="team" className="pl-4">A Team</label>
                    <p className="text-gray-400 text-sm">I will be inviting others to campaign with me</p>
                </div>
              </div>
              
            </div>
            <div className="flex flex-col flex-wrap justify-start items-stretch space-y-2 w-3/5">
              <div className="flex flex-col">
                  <label for='goal' className="pl-4">Signature Goal</label>
                  <input
                    id='goal'
                    name="goal"
                    type='text'
                    className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label for='url' className="pl-4">Link</label>
                  <input
                    id='url'
                    name="url"
                    type='text' //maybe change type to some kind of tagging??
                    className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
                  ></input>
                </div>
                <div className="flex w-100 justify-items-stretch justify-between space-x-2 py-6">
                  <button onClick={handleSubmit} className="bg-blue-700 text-white font-bold text-base rounded-full px-12 py-3 transition hover:bg-blue-400 focus:outline-none">create petition</button>
                  
                </div>
            </div>

            {/* <div className="flex flex-col flex-wrap justify-start items-stretch space-y-2 w-2/5">
              <div className="flex flex-col">
                <label for="file" className="py-10 border-dashed rounded-full border-2 border-grey-400 text-center">choose files to upload:</label>
                <input
                  id='file'
                  name='file'
                  type='file'
                  className="hidden"
                  multiple>
                </input>
              </div>
            </div> */}
          </form>
      </div>
    </div>)
};

export default CreatePetition;