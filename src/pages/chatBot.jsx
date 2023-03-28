import React, { useState } from 'react'
import axios from 'axios'
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
    <div> 
      <form action="">
                        <div className='w-1/2'>
                            <label htmlFor="email" className='text-md text-[#302F5C] font-tomorrow font-semibold pl-2'>Email</label>
                            <input 
                            type="email" 
                            placeholder='example@gmail.com' 
                            className='mt-2 pl-3 w-full py-4 rounded-2xl bg-[#F7F5F5] outline-none border-none'
                            value={predict}
                            onChange={e => setPredict(e.target.value)}
                            />
                        </div>
      <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}
