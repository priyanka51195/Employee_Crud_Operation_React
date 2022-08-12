import React from 'react'
import MenuBar from '../MenuBar/index'

const Dashboard = () => {
  return (
    <div>
        <div>
        <MenuBar/>
         </div>

         <h3 style={{textDecoration: 'underline', marginLeft: '20px'}}> ABOUT US </h3>
         <div style={{ display: 'flex', justifyContent: 'flex-start'}}> 
            <div>
            <img width={500} height={400} marginLeft={10} src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHw%3D&w=1000&q=80"></img>
            </div>
        
            <div style={{width: '95%', marginLeft: '40px' ,textAlign: 'justify',textJustify: 'inter-word'}}>
            <p> We live in a God-gifted world, but humans are the reason behind the deterioration of this precious environment. Everything that surrounds us constitutes the ensvironment. The earth is made up of various environments in which all living and nonliving things coexist. Nature’s biological, physical and natural forces interact to generate conditions that allow creatures to survive. The environment is a term used to describe such circumstances. A derivative of the word environment is the French word ‘environ,’ which means ‘to surround.’ The environment is made up of all biotic (living) and abiotic (non-living) things. Plants, animals, human beings, and insects are examples of biotic components. They are classified as biological environmental components. Every living thing has a predetermined life cycle. The human being, for example, is the most powerful living entity on the planet. To meet his needs, he requires plants and animals. Without these components, humans’ life will be disordered. The atmosphere, lithosphere, hydrosphere, and biosphere are all examples of abiotic/physical components. The atmosphere is a gaseous layer containing nitrogen, oxygen, and other gases. The hydrosphere is made up of all the water bodies, such as rivers and oceans. The lithosphere is the earth’s solid outer shell. It is composed of the crust, covering the earth’s mantle, rocks, and soil. The biosphere, where life exists, is the most essential layer. There are ecosystems in the water, on land, and in the air.

All of these species’ life is predicated on their ongoing interaction with one another. Their functioning is organised by nature, and once spent, it might be eliminated. The destruction of the environment has now become a big issue that humans must address.</p>
            </div>
         </div>


        
    </div>
  )
}

export default Dashboard
