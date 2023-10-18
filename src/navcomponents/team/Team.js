import Teamgroup from '../../assets/Teamgroup.png'
import './Team.css'

export const Team = () => {
    return <div>
        <div className="team-container">
            <img className='smith-team' src={Teamgroup} alt='' />
        </div>

        <div className="">

            <p>
                At De-Rabacon Plastics, our exceptional team comprises diverse professionals who bring their expertise<br />
                and passion to the forefront of sustainable innovation.<br />
                Led by the visionary Yolo Bakumor Smith, Chief Executive Officer, whose 9-year journey in polymer engineering <br />
                and climate activism fuels our mission. Supported by John Bosco C. Amanambu, Manager (Production), a seasoned <br />
                environmental chemist with 8 years of hands-on experience. Cynthia Aya-ere Raphael, Chief Marketing Officer, <br />
                leveraging her 5-year track record in dynamic marketing strategies. Wenes Anita Carter, Chief Financial Officer, <br />
                boasts 7 years of financial acumen. Engr Unity Elemi, Team Advisor, contributes with a decade of engineering excellence.<br />
                Together, we drive De-Rabacon Plastics' mission to transform plastic waste into sustainable construction solutions, <br />
                reshaping the future of building practices.<br />
            </p>
        </div>
    </div>
}
