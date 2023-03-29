import React, { useState, Fragment } from 'react'
import axios from 'axios'
import { GeneralImg, MidEllipse } from '../assets/index'
import SideNav from '../components/common/sideNav'
import TopNav from '../components/common/topNav'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

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
export default function ChatBot() {

  const [predict, setPredict] = useState("")
  const [selected, setSelected] = useState(categories[0])
  const [query, setQuery] = useState('')
  const [diagonsis, setDiagnosis] = useState("")


  const filteredCategory =
    query === ''
      ? categories
      : categories.filter((category) =>
          category.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

const baseUrl = 'https://quixotic-earth-production.up.railway.app';

const predictDisease = async (e) => {
  e.preventDefault();
  try {
    const params = selected.name.toString();
    console.log(params)
    const response = await axios.get(`${baseUrl}/predict?symp_lst=${params}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
    mode: 'no-cors',
    });
    setDiagnosis(response.data.pred)

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// // Example usage:
// const symptoms = {
//   symp_lst: ,
// };
// console.log(symptoms)

  return (
    <div
        className="w-full object-cover h-max bg-center bg-cover bg-no-repeat"
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
        <main className='w-full'>
          <section className='w-full fixed top-0 '>
            <TopNav />
          </section>
          <section className='mt-24 w-full '>
<div className="flex flex-col  h-screen bg-gray-200">
  <div className="flex-1 overflow-y-auto p-6">
    <div className="flex flex-col  space-y-4 w-full">
      <div className="rounded-lg bg-white p-4 max-w-[30rem] shadow-md">
        <p className="text-black">Hello , Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit deleniti aperiam numquam? Molestiae, doloribus odio, velit tenetur quisquam placeat officia ipsam dicta atque commodi ullam modi ducimus sapiente! Similique explicabo perspiciatis impedit? i am your AI Doctor what symptoms are you having </p>
      </div>
      <div className='w-full flex justify-end items-end'>
         {selected.name && (
          <div className="rounded-lg   max-w-[30rem] bg-white p-4 shadow-md">
            {selected.name}
          </div>
        )}
      </div>
      <div className='w-full flex justify-start items-start'>
         {diagonsis == "" ? null : (
          <div className="rounded-lg   max-w-[30rem] bg-white p-4 shadow-md">
            here is a diagnosis that might help you  {diagonsis}
          </div>
        )}
      </div>   

    </div>
  </div>

</div>
  <div className="px-8 sticky  bottom-0 w-full shadow-md">
    <form className="flex w-full flex-row items-center gap-3 ">

        <div className=" w-[60%]">
          <Combobox value={selected} onChange={setSelected}>
            <div className=" my-2">
              <div className="w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none outline-none py-6 pl-5 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(category) => category.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="fixed top-[22rem] max-h-60 w-[60%] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredCategory.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredCategory.map((category) => (
                      <Combobox.Option
                        key={category.id}
                        className={({ active }) =>
                          `flex cursor-default select-none py-3 rounded-md pl-10 pr-4 ${
                            active ? 'bg-red-500 text-white' : 'text-gray-900'
                          }`
                        }
                        value={category}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`flex flex-row truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {category.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-primary'
                                }`}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
        <div className='w-[30%]'>
          <button type="submit" onClick={predictDisease} className="bg-red-900 px-10 text-white py-4 rounded-2xl">send</button>
        </div>
    </form>
  </div>
          </section>
        </main>
        
      </div>
    </div>
  )
}
