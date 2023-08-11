import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import './Home.css'; // Import the CSS file


import state from '../store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home">
          <div className="flex">
            {/* Left Side: Shirt Image */}
            <motion.div className="w-1/2">
              {/* Place your shirt image or component here */}
              <img src="/logo.png" alt="Shirt" className=" logo smaller-logo" />
            </motion.div>

            {/* Right Side: Heading and Content */}
            <motion.div className="w-1/2 p-10" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="heading">ShopSnapster</h1>
              </motion.div>
              <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                <p className="font-normal text-gray-600 text-base">
                  ShopSnapster created by myself (Yogesh Tripathi) is the platform that will
                   revolutionize the way you shop. You can create your unique and exclusive products with our 
                    3D customization tool. You can change the logo, designs, and color of the product. 
                </p>
                <CustomButton
                  type="filled"
                  title=" Customize It"
                  handleClick={() => state.intro = false}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
