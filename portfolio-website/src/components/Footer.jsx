import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
export const Footer = () => {
    <div className="bg-gray-800 text-white py-4">
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div className="w-1/3 text-center">
          <h3>Designed and Developed by Soumyajit Behera</h3>
        </div>
        <div className="w-1/3 text-center">
          <h3>Copyright © SB</h3>
        </div>
        <div className="w-1/3 flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/soumyajit4419"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Soumyajit4419"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/soumyajit4419"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}