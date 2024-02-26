import React from 'react'

function Elements({elementTypes}) {

  const elements = elementTypes

  const elementToPng = {
    Pyro: 'Pyro.png',
    Cryo: 'Cryo.png',
    Electro: 'Electro.png',
    Hydro: 'Hydro.png',
    Geo: 'Geo.png',
    Dendro: 'Dendro.png',
    Anemo: 'Anemo.png',
  }
  return (
    <div className='flex justify-end gap-2'>

      {elements.map((element, index) => (
        <div key={index}>
          <img className='w-10 p-1 rounded-lg bg-gray-700' src={`/images/elements/Element_${elementToPng[element]}`} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Elements