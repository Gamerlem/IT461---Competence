import './RobotView.css'

const RobotView = () => {
    return (
        <div class='container'>
            <span class='col'>
                <div class='img-container'>
                    <p class='id-txt'><strong>ID#231</strong></p>
                    <img class='robot-img' src='https://robohash.org/1' alt=''/>
                </div>
                <div class='info-container'>
                    <div class='info-txt'>
                        <h1 class='robot-name'>RoboPrim</h1>
                        <hr class='underline' />
                        <br/>
                        <p class='txt_1'>Manufacturer : Lhora</p>
                        <p class='txt_2'><em>Created : June 06, 2022 | Updated : June 06, 2022</em></p>
                        <br/>
                        <p class='txt_1'>Capabilities :</p>
                        <p class='txt_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </span>
        </div>
    );
}

export default RobotView;