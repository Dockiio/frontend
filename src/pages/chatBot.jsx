import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GeneralImg, MidEllipse } from '../assets/index'
import SideNav from '../components/common/sideNav'
import TopNav from '../components/common/topNav'

export default function ChatBot() {

  const [predict, setPredict] = useState("")
  const l = ['Fungal_infection', 'Allergy', 'GERD', 'Chronic_cholestasis',
        'Drug_Reaction', 'Peptic_ulcer_diseae', 'AIDS', 'Diabetes',
        'Gastroenteritis', 'Bronchial_Asthma', 'Hypertension', 'Migraine',
        'Cervical_spondylosis', 'Paralysis_(brain_hemorrhage)', 'Jaundice',
        'Malaria', 'Chicken_pox', 'Dengue', 'Typhoid', 'hepatitis_A',
        'Hepatitis_B', 'Hepatitis_C', 'Hepatitis_D', 'Hepatitis_E',
        'Alcoholic_hepatitis', 'Tuberculosis', 'Common_Cold', 'Pneumonia',
        'Dimorphic_hemmorhoids(piles)', 'Heart_attack', 'Varicose_veins',
        'Hypothyroidism', 'Hyperthyroidism', 'Hypoglycemia',
        'Osteoarthristis', 'Arthritis',
        '(vertigo)_Paroymsal__Positional_Vertigo', 'Acne',
        'Urinary_tract_infection', 'Psoriasis', 'Impetigo']
  const handleSubmit = (e) => {
    e.preventDefault()
  axios.post('https://quixotic-earth-production.up.railway.app/predict', {
    detail: 'Fungal_infection'
  }
  , {
  headers: {
    'Content-Type': 'application/json',
    
  }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  }
  return (
    <div
        className="w-full object-cover h-max bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${"https://res.cloudinary.com/phantom1245/image/upload/v1679974352/dockii/generalImg_mfdjrd.png" ||GeneralImg})` }}
    >
      {/* decoration */}
      <div className='fixed top-2 left-0 w-full pt-6 flex justify-center items-center'>
        <img src={MidEllipse} alt="" className='w-[40%]'/>
      </div>
      <div className='flex flex-row'>
        <section className=' sticky top-0 left-0'>
          <SideNav />
        </section>
        <main className='w-full'>
          <section className='w-full fixed top-0 '>
            <TopNav />
          </section> 
        </main>
      </div>
    </div>
  )
}
