import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Arry } from './components/arry';
import { SecArry } from './components/secarry';
import { ThirdArry } from './components/thirdarry';
import { ForthArry } from './components/fortharry';
import { FifthArry } from './components/fifthArry';








function App() {
 
  // first carr=================
  const [arr, setArrry] = useState(
    [
      {
        title: 'Audi RB',
        price: '₹ 2.72 Cr$',
        Quantity: '1',
        Size: ' 4426 mm in length',
        Description: 'The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi s trademark quattro permanent all-wheel drive system. ... It was introduced by the German car ...',

      },

       
     
    ]);
  let addtoCart = () => {
    alert(`
  title:   Audi RB
  price:   ₹ 2.72 Cr$
  Quantity:   1
  Size:     4426 mm in lengt
  Description:     The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi s trademark quattro permanent all-wheel drive system. Itwas introduced by the German car ...`)
  }
  // first carr=================
  // second carr=================

  const [arr2, setArry2] = useState(

    [
      {
        title2: 'ferrari 488',
        price2: '$284,700',
        Quantity2: '10',
        Size2: '	1,952 mm (76.9 in)',
        Description2: 'A twin-turbocharged 3.9-liter V-8 lives under the 488s hood, and it generates a whopping 711 horsepower and 567 lb-ft of torque. A seven-speed automatic gearbox governs the proceedings, sending power to the cars rear wheels. The 488 is purpose-built to quench your thirst for speed.',

      },
    ]
  )

  let addCart = () => {
    alert(`
  title:    ferrari 488
  price:    $284,700 
  Quantity:   10
  Size:    	1,952 mm (76.9 in) 
  Description:    A twin-turbocharged 3.9-liter V-8 lives under the 488s hood, and it generates a whopping 711 horsepower and 567 lb-ft of torque. A seven-speed automatic gearbox governs the proceedings, sending power to the cars rear wheels. The 488 is purpose-built to quench your thirst for speed.`)
  }
  // second carr=================
  // third carr=================
  const [arr3,setArry3]= useState(
    [
      {
        title3:'BMW M3',
        price3:' 65.00 Lakh',
        Quantity3:'8',
        Size3:'1433mm',
        Description3:' BMW M3 Is High Performance In Every Regard, Including Its Superior Levels Of Connectivity. Welcome To Dewan Motors, The Exclusive Importer Of BMW In Pakistan...',

      },
    ]
  )
let addCarts =()=>{
  alert(`
  title:  BMW M3
  price:  65.00 Lakh
  Quantity:   8
  Size:     1433mm
  Description:    BMW M3 Is High Performance In Every Regard, Including Its Superior Levels Of Connectivity. Welcome To Dewan Motors, The Exclusive Importer Of BMW In Pakistan...
  `)
}

  // third carr=================
  // forth carr=================
const[arr4,setArry4] = useState(
  [
    {
      title4:'mercedes amg g',
      price4:' $90,000.',
      Quantity4:'23',
      Size4:'1,939mm wide',
      Description4:'this is my project',

    },
  ]
)

let AddCarts= ()=>{
  alert(`
  title:  mercedes amg g
  price:   $90,000.
  Quantity:   2
  Size:     1,939mm wide
  Description:    Every Mercedes-AMG GT has a twin-turbo 4.0-liter V-8 and a seven-speed dual-clutch automatic
  `)
}

  // forth carr=================
  // fifth carr=================
  const [arr5,setArry5] = useState (
    [
      {
        title5:'bugatti vision gt',
        price5:'$20,000',
        Quantity5:'20',
        Size5:'1,939mm ',
        Description5:'this is my project',

      },
    ]
  )
  let AddtoCarts = () =>{
    alert(`
  title:  bugatti vision gt
  price:   $20,000.
  Quantity:   20
  Size:     1,939mm 
  Description:    Every Mercedes-AMG GT has a twin-turbo 4.0-liter V-8 and a seven-speed dual-clutch automatic
  `)
  }
  // fifth carr=================





  return (
    <div className="App">
      
      {arr.map((e) => (
        <Arry title={e.title} price={e.price} Quantity={e.Quantity} Size={e.Size} Description={e.Description}
        action={addtoCart} />

      ))}

      {arr2.map((e) => (
        <SecArry Sectitle={e.title2} price2={e.price2} Quantity2={e.Quantity2} Size2={e.Size2} Description2={e.Description2}
          action={addCart} />
      ))}

      {arr3.map((e) => (
        <ThirdArry title3={e.title3} price3={e.price3} Quantity3={e.Quantity3} Size3={e.Size3} Description3={e.Description3}
        action={addCarts} />
      ))}

     {arr4.map((e) => (
        <ForthArry title4={e.title4} price4={e.price4} Quantity4={e.Quantity4} Size4={e.Size4} Description4={e.Description4}
        action={AddCarts} />
      ))}

    {arr5.map((e) => (
        <FifthArry title5={e.title5} price5={e.price5} Quantity5={e.Quantity5} Size5={e.Size5} Description5={e.Description5}
        action={AddtoCarts} />
      ))}

        <>
        <span >Cars Collections......</span> 
        </>


    </div>
  );
}

export default App;