
import './App.css';
import Animation from './components/Animation';
import Header from './components/Header';
import HeaderLink from './components/HeaderLink';
import ProjectSection from './project/projectSection';

function App() {

  return (
    <>
    <div className='bg-black text-white font-["Nunito"]'>
      <section className='h-screen flex flex-col justify-between'>
        <Header />
        <Animation />
        <HeaderLink />
        <div className='relative self-center after:content-[""] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]'>
          <button className='bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20'>
            Latest Works
            <svg 
              xmlns:dc="http://purl.org/dc/elements/1.1/" 
              xmlns:cc="http://creativecommons.org/ns#" 
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
              xmlns:svg="http://www.w3.org/2000/svg" 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" 
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" 
              version="1.1" 
              x="0px" 
              y="0px" 
              width="44" 
              height="44" 
              viewBox="0 0 100 100"
              className='absolute rotate-90 left-1/2 -translate-x-1/2 top-11 group-hover:top-12 ease-in-out duration-100'
            >
              <g transform="translate(0,-952.36218)">
                <path 
                  style={{
                    textIndent : 0,
                    textTransform : 'none',
                    direction : 'ltr',
                    blockProgression : 'tb',
                    baselineShift : 'baseline',
                    color : '#000000',
                    enableBackground : 'accumulate'
                  }} 
                  d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z" 
                  fill="#fff" 
                  fillOpacity="1" 
                  stroke="white" 
                  strokeWidth="2"  
                  marker="none" 
                  visibility="visible" 
                  display="inline" 
                  overflow="visible"
                />
              </g>
            </svg>
          </button>
        </div>
      </section>
      <section className='max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16'>
        <h2 className='text-3xl sm:text-[40px] bg-[black] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] border-b-2 border-[#1788ae]'>
          Latest Works
        </h2>
        <ProjectSection />
      </section>
    </div>
    </>
  )
}

export default App;
