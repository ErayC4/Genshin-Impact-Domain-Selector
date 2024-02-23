import React from 'react'

function Elements({elementTypes}) {

  const elements = elementTypes

  const elementToPng = {
    Pyro: '/images/elements/Element_Pyro.png',
    Cryo: '/images/elements/Element_Cryo.png',
    Electro: '/images/elements/Element_Electro.png',
    Hydro: '/images/elements/Element_Hydro.png',
    Geo: '/images/elements/Element_Geo.png',
    Dendro: '/images/elements/Element_Dendro.png',
    Anemo: '/images/elements/Element_Anemo.png',
  }
  return (
    <div className='flex justify-end gap-2'>

      {elements.map((element, index) => (
        <div key={index}>
          <img className='w-10 p-1 rounded-lg bg-slate-600' src={elementToPng[element]} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Elements