import './RobotView.css'

const RobotView = () => {
    return (
        <div className='container'>
            <span className='col'>
                <div className='img-container'>
                    <p className='id-txt'><strong>ID#231</strong></p>
                    <img className='robot-img' src='https://robohash.org/1' alt=''/>
                </div>
                <div className='info-container'>
                    <div className='info-txt'>
                        <h1 className='robot-name'>RoboPrim</h1>
                        <hr className='underline' />
                        <br/>
                        <p className='txt_1'>Manufacturer : Lhora</p>
                        <p className='txt_2'><em>Created : June 06, 2022 | Updated : June 06, 2022</em></p>
                        <br/>
                        <p className='txt_1'>Capabilities :</p>
                        <p className='txt_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </span>
        </div>
    );
}

export default RobotView;