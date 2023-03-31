import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import { GeneralImg, MidEllipse } from '../assets/index'
import SideNav from '../components/common/sideNav'
import TopNav from '../components/common/topNav'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
//firebase
import { 
  db, 
  doc, 
  updateDoc,
  setDoc,
  arrayUnion,
  getDoc
  } from "../firebase/firebase.config"

  const categories = 
  [
  { id: 1, name: '' },
  { id: 2, name: 'skin_rash' },
  { id: 3, name: 'nodal_skin_eruptions' },
  { id: 4, name: 'continuous_sneezing' },
  { id: 5, name: 'shivering' },
  { id: 6, name: 'chills' },
  { id: 7, name: 'joint_pain' },
  { id: 8, name: 'stomach_pain' },
  { id: 9, name: 'acidity' },
  { id: 10, name: 'ulcers_on_tongue' },
  { id: 11, name: 'muscle_wasting' },
  { id: 12, name: 'vomiting' },
  { id: 13, name: 'burning_micturition' },
  { id: 14, name: 'spotting_urination' },
  { id: 15, name: 'fatigue' },
  { id: 16, name: 'weight_gain' },
  { id: 17, name: 'anxiety' },
  { id: 18, name: 'cold_hands_and_feets' },
  { id: 19, name: 'mood_swings' },
  { id: 20, name: 'weight_loss' },
  { id: 21, name: 'restlessness' },
  { id: 22, name: 'lethargy' },
  { id: 23, name: 'patches_in_throat' },
  { id: 24, name: 'irregular_sugar_level' },
  { id: 25, name: 'cough' },
  { id: 26, name: 'high_fever' },
  { id: 27, name: 'sunken_eyes' },
  { id: 28, name: 'breathlessness' },
  { id: 29, name: 'sweating' },
  { id: 30, name: 'dehydration' },
  { id: 31, name: 'indigestion' },
  { id: 32, name: 'headache' },
  { id: 33, name: 'yellowish_skin' },
  { id: 34, name: 'dark_urine' },
  { id: 35, name: 'nausea' },
  { id: 36, name: 'loss_of_appetite' },
  { id: 37, name: 'pain_behind_the_eyes' },
  { id: 38, name: 'back_pain' },
  { id: 39, name: 'constipation' },
  { id: 40, name: 'abdominal_pain' },
  { id: 41, name: 'diarrhoea' },
  { id: 42, name: 'mild_fever' },
  { id: 43, name: 'yellow_urine' },
  { id: 44, name: 'yellowing_of_eyes' },
  { id: 45, name: 'acute_liver_failure' },
  { id: 46, name: 'fluid_overload' },
  { id: 47, name: 'swelling_of_stomach' },
  { id: 48, name: 'swelled_lymph_nodes' },
  { id: 49, name: 'malaise' },
  { id: 50, name: 'blurred_and_distorted_vision' },
  { id: 51, name: 'phlegm' },
  { id: 52, name: 'throat_irritation' },
  { id: 53, name: 'redness_of_eyes' },
  { id: 54, name: 'sinus_pressure' },
  { id: 55, name: 'runny_nose' },
  { id: 56, name: 'congestion' },
  { id: 57, name: 'chest_pain' },
  { id: 58, name: 'weakness_in_limbs' },
  { id: 59, name: 'fast_heart_rate' },
  { id: 60, name: 'pain_during_bowel_movements' },
  { id: 61, name: 'pain_in_anal_region' },
  { id: 62, name: 'bloody_stool' },
  { id: 63, name: 'irritation_in_anus' },
  { id: 64, name: 'neck_pain' },
  { id: 65, name: 'dizziness' },
  { id: 66, name: 'cramps' },
  { id: 67, name: 'bruising' },
  { id: 68, name: 'obesity' },
  { id: 69, name: 'swollen_legs' },
  { id: 70, name: 'swollen_blood_vessels' },
  { id: 71, name: 'puffy_face_and_eyes' },
  { id: 72, name: 'enlarged_thyroid' },
  { id: 73, name: 'brittle_nails' },
  { id: 74, name: 'swollen_extremeties' },
  { id: 75, name: 'excessive_hunger' },
  { id: 76, name: 'extra_marital_contacts' },
  { id: 77, name: 'drying_and_tingling_lips' },
  { id: 78, name: 'slurred_speech' },
  { id: 79, name: 'knee_pain' },
  { id: 80, name: 'hip_joint_pain' },
  { id: 81, name: 'muscle_weakness' },
  { id: 82, name: 'stiff_neck' },
  { id: 83, name: 'swelling_joints' },
  { id: 84, name: 'movement_stiffness' },
  { id: 85, name: 'spinning_movements' },
  { id: 86, name: 'loss_of_balance' },
  { id: 87, name: 'unsteadiness' },
  { id: 88, name: 'weakness_of_one_body_side' },
  { id: 89, name: 'loss_of_smell' },
  { id: 90, name: 'bladder_discomfort' },
  { id: 91, name: 'foul_smell_ofurine' },
  { id: 92, name: 'continuous_feel_of_urine' },
  { id: 93, name: 'passage_of_gases' },
  { id: 94, name: 'internal_itching' },
  { id: 95, name: 'toxic_look_(typhos)' },
  { id: 96, name: 'depression' },
  { id: 97, name: 'irritability' },
  { id: 98, name: 'muscle_pain' },
  { id: 99, name: 'altered_sensorium' },
  { id: 100, name: 'red_spots_over_body' },
  { id: 101, name: 'belly_pain' },
  { id: 102, name: 'abnormal_menstruation' },
  { id: 103, name: 'dischromic_patches' },
  { id: 104, name: 'watering_from_eyes' },
  { id: 105, name: 'increased_appetite' },
  { id: 106, name: 'polyuria' },
  { id: 107, name: 'family_history' },
  { id: 108, name: 'mucoid_sputum' },
  { id: 109, name: 'rusty_sputum' },
  { id: 110, name: 'lack_of_concentration' },
  { id: 111, name: 'visual_disturbances' },
  { id: 112, name: 'receiving_blood_transfusion' },
  { id: 113, name: 'receiving_unsterile_injections' },
  { id: 114, name: 'coma' },
  { id: 115, name: 'stomach_bleeding' },
  { id: 116, name: 'distention_of_abdomen' },
  { id: 117, name: 'history_of_alcohol_consumption' },
  { id: 118, name: 'blood_in_sputum' },
  { id: 119, name: 'prominent_veins_on_calf' },
  { id: 120, name: 'palpitations' },
  { id: 121, name: 'painful_walking' },
  { id: 122, name: 'pus_filled_pimples' },
  { id: 123, name: 'blackheads' },
  { id: 124, name: 'scurring' },
  { id: 125, name: 'skin_peeling' },
  { id: 126, name: 'silver_like_dusting' },
  { id: 127, name: 'small_dents_in_nails' },
  { id: 128, name: 'inflammatory_nails' },
  { id: 129, name: 'blister' },
  { id: 130, name: 'red_sore_around_nose' },
  { id: 131, name: 'yellow_crust_ooze' },
  { id: 132, name: 'prognosis' },
  { id: 133, name: 'itching' },
  ]
const topics = ['itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_ofurine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic_patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen',
 'history_of_alcohol_consumption', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze', 'prognosis']

export default function ChatBot() {

  const [diagonsis, setDiagnosis] = useState("")
  const [messages, setMessages] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);

  const filteredTopics = topics.filter(
    topic => !selectedTopics.includes(topic) && topic.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleTopicClick = topic => {
    setSelectedTopics([...selectedTopics, topic]);
    setFilter('');
  };

  const handleRemoveTopic = topic => {
    setSelectedTopics(selectedTopics.filter(t => t !== topic));
  };
const handleInputKeyDown = event => {
  if (event.key === ' ') {
    event.preventDefault();
    setSelectedTopics([...selectedTopics, filter.trim()]);
    setFilter('');
  } else if (event.key === 'Backspace') {
    if (filter === '' && selectedTopics.length > 0) {
      event.preventDefault();
      setSelectedTopics(selectedTopics.slice(0, -1));
    } else if (filter.endsWith(' ')) {
      event.preventDefault();
      setFilter(filter.slice(0, -1));
    }
  }
};


        const fetchItems = async () => {

                    
            let uid = localStorage.getItem('docRef');
            const userDocRef = doc(db, 'users', uid);
            const docSnap = await getDoc(userDocRef);
            
            if (docSnap.exists()) {
              setMessages(docSnap.data().messages);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
        }

        fetchItems();

const baseUrl = 'https://quixotic-earth-production.up.railway.app';
const url = selectedTopics.reduce((acc, item, index) => {
  const separator = index === 0 ? '?' : '&';
  return `${acc}${separator}symp_lst=${item}`;
}, `${baseUrl}/predict`);

const predictDisease = async (e) => {
  e.preventDefault();

  try {

    const response = await axios.get(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
    mode: 'no-cors',
    });
    setDiagnosis(response.data.pred)

    let uid = localStorage.getItem('docRef');
    const userDocRef = doc(db, 'users', uid);
    await updateDoc(userDocRef, {
      messages: arrayUnion({
        symptoms: selectedTopics,
        diagnosis: response.data.pred,
        timestamp: new Date().getTime(),
      }),
    });

    setSelectedTopics([])
    return response.data;
  } catch (error) {
    console.error(error);
  }
  
};


  return (
    <div
        className="w-full sticky top-0 object-cover h-max bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${"https://res.cloudinary.com/phantom1245/image/upload/v1679974352/dockii/generalImg_mfdjrd.png" ||GeneralImg})` }}
    >
      {/* decoration */}
      <div className='fixed top-2 left-0 w-full pt-6 flex justify-center items-center'>
        <img src={MidEllipse} alt="" className='w-[40%]'/>
      </div>
      <div className='flex flex-row z-[3]'>
        <section className=' sticky top-0 left-0'>
          <SideNav />
        </section>
        <main className='w-full z-[999]'>
          <section className='w-full fixed top-0 '>
            <TopNav />
          </section>
          <section className='mt-24 w-full '>
<div className="flex flex-col mb-32  ">
  <div className="flex-1 p-6">
    <div className="flex flex-col  space-y-4 w-full">
      <div className="rounded-lg flex gap-3 bg-white bg-opacity-30 p-4 max-w-[25rem] shadow-md">
        <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1679977841/dockii/Ellipse_13_y0fxfk.png" alt="" />
        </div> 
        <div>
          <p className="text-black">Hello , i am your AI Doctor what symptoms are you having? </p>
        </div>
      </div>
      <div className="rounded-lg flex gap-3 bg-white bg-opacity-30 p-4 max-w-[30rem] shadow-md">
        <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1679977841/dockii/Ellipse_13_y0fxfk.png" alt="" />
        </div> 
        <div>
          <p className="text-black">Please provide me with enough details so i can accurately predict a diagnosis that may help. 
          <br /> 
          please note that this prediction might note be accurate because this is still a test phase. 
          please separate your symptoms by comma(,) </p>
        </div>
      </div>
      <div className="flex-grow w-full">
        {messages &&
          messages.map((message) => (
            <div key={message.timestamp} className="flex flex-col w-full justify-between  items-center">
              <div className='w-full flex justify-end items-end'>
                <div  className="rounded-lg bg-opacity-30 flex justify-center items-center gap-3 max-w-[30rem] bg-white p-4 shadow-md">
                  <div className='w-[7rem]'>
                    <img className="w-full h-auto " src="https://res.cloudinary.com/phantom1245/image/upload/v1680124827/dockii/Ellipse_15_v7m1zr.png" alt="" />
                  </div> 
                  <div className="flex flex-wrap ">Dockii here are some of my symptoms {message.symptoms.map(symptom => symptom.replace(/_/g, ' ')).join(', ')}</div>
                </div>
                
              </div>
               <div className='w-full flex justify-start items-start'>
                {message.diagnosis == "" ? null : (
                  <div className="rounded-lg bg-opacity-40 flex justify-center items-center max-w-[30rem] bg-white p-4 shadow-md">
                    <div>
                        <img src="https://res.cloudinary.com/phantom1245/image/upload/v1679977841/dockii/Ellipse_13_y0fxfk.png" alt="" />
                    </div> 
                    
                    <div>
                      here is a diagnosis that might help you  {message.diagnosis}
                    </div>
                  </div>
                )}
              </div>
              
            </div>
          ))}
      </div>
       

    </div>
  </div>
    <div className="flex fixed bg-red-200 bg-opacity-70 bottom-0 w-full shadow-md z-[999] flex-col gap-4">
      <div className="flex px-7 pb-5 relative top-8 flex-row w-full overflow-x-auto justify-start gap-4">
        {filteredTopics.map(topic => (
          <div
            key={topic}
            className="px-3 py-1 w-max rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleTopicClick(topic)}
          >
            {topic}
          </div>
        ))}
      </div>
      <div className="flex gap-4 mb-4">
        <label htmlFor="filter" className="sr-only">
          Filter topics
        </label>
        <div className="flex flex-col px-6 w-full flex-wrap">
          <div className='flex  pl-4 flex-row gap-3'>
            {selectedTopics.map(topic => (
              <div
                key={topic}
                className="px-2 py-1 my-1 w-max rounded-md bg-blue-500 text-white flex items-center gap-2"
              >
                <span>{topic}</span>
                <button
                  type="button"
                  className="text-sm font-medium text-white hover:underline focus:outline-none"
                  onClick={() => handleRemoveTopic(topic)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <div className='flex w-full gap-3 flex-row justify-center items-center'>
          <div className='w-[70%]'>
            <input
              type="text"
              id="filter"
              name="filter"
              value={selectedTopics.map(symptom => symptom.replace(/_/g, ' ')).join(', ') || filter}
              onChange={handleFilterChange}
              onKeyDown={handleInputKeyDown}
              
              className="flex-1 w-full pl-5 py-5 rounded-md bg-gray-100 text-gray-800 focus:outline-none "
            />
          </div>
          
          <div className='w-[30%]'>
            <button type="submit" onClick={predictDisease} className="bg-red-900 px-10 text-white py-4 rounded-2xl">send</button>
          </div>
          </div>
          
        </div>
        
      </div>
        
    </div>
</div>

          </section>
        </main>
        
      </div>
    </div>
  )
}
