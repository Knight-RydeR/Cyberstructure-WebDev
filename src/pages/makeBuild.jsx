import logo1 from '../images/about.png';
import logo2 from '../images/case.jpg';
import logo3 from '../images/cooler.jpg';
import logo4 from '../images/cpu.jpg';
import logo5 from '../images/fan.jpg';
import logo6 from '../images/gpu.jpg';
import logo7 from '../images/motherboard.jpg';
import logo8 from '../images/psu.jpg';
import logo9 from '../images/RAM.jpg';
import logo10 from '../images/sdd.jpg';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { authAxios,authAxiosAdmin,authAxiosDefault,checkJWTVALID } from './axiosInstances';
import '../styles/App.css';
import React, {useState,useEffect} from 'react'

import ActionCard from '../components/ActionAreaCard'
import { Link } from "react-router-dom";
import Nav from '../components/navbar/Navbar'
import Drop from '../components/DropdownHUB'
// import NavSearch from '../components/NavSearch'

const MakeBuild = () => {
    let history = useHistory();

    const [cardInvis, setCardInvis] = useState(true);
    let [motherboard, setMotherBoard] = useState("");
    let [processor, setProcessor] = useState("");
    let [ram, setRam] = useState("");
    let [psu, setPsu] = useState("");
    let [storage, setStorage] = useState("");
    let [gpu, setGPU] = useState("");
    let [cooler, setCooler] = useState("");
    let [fans, setFan] = useState("");
    let [casing, setCasing] = useState("");
    let [products,setProducts] = useState([]);

    const create = async (e) => {
        e.preventDefault();
        console.log(motherboard,processor)
        console.log(`in create`);
       
        await authAxios.post('saveBuild', {
            Processor : processor,
            Motherboard:motherboard,
            Ram:ram,
            PSU:psu,
            Storage:storage,
            GPU:gpu,
            Cooler:cooler,
            Fans:fans,
            Case:casing,
          }).then(response => {

            if (response.status == 200) {
                toast.success("Build Created!", {
                    position: toast.POSITION.TOP_RIGHT
                });

        //         localStorage.setItem('accessToken', JSON.stringify(response.data.data))
                history.push('/makeBuild');

            }
            else {
                console.log(response)
            }
        })
            .catch(err => {
                toast.error(`Build Creation Failed !,error is ${err}`, {
                    position: toast.POSITION.TOP_RIGHT
                });
            });
    }
 

    useEffect(() => {
        authAxiosDefault.get(`/product`).then(response => {
            console.log(response.data.data)
            setProducts([...response.data.data])

        }).catch(error => console.log(error))

    }, [])
   
        return (
            <div>
                <Nav name="Make Build "/>
                {/* <NavSearch /> */}
        <div className="Main">
        <form onSubmit={create}>
                <div className="MKB-CardArea">
                        <div>
                                <ActionCard name="Motherboard" description="Choose your motherboard." source={logo7} cardTrigger={cardInvis} setTrigger={()=>setCardInvis(true)}/>
                                <Drop name="Select Category" type="makeBuild" changeC={setMotherBoard} catVal={motherboard} products={products.filter(e=>e.category==1)}/>
                        </div>
                        <div>
                                <ActionCard name="Processor" description="Choose your processor." source={logo4} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                <Drop name="Select Category" type="makeBuild" changeC={setProcessor} catVal={processor} products={products.filter(e=>e.category==2)} />
                        </div>
                        <div>
                                <ActionCard name="RAM" description="Choose your RAM." source={logo9} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                <Drop name="Select Category" type="makeBuild" changeC={setRam} catVal={ram} products={products.filter(e=>e.category==3)} />
                        </div>
                        <div>
                                <ActionCard name="Power Supply" description="Choose your Power Supply." source={logo8} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                <Drop name="Select Category" type="makeBuild" changeC={setPsu} catVal={psu} products={products.filter(e=>e.category==4)} />
                        </div>
                        <div>
                                <ActionCard name="Storage" description="Choose your Storage device." source={logo10} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                <Drop name="Select Category" type="makeBuild" changeC={setStorage} catVal={storage} products={products.filter(e=>e.category==5)} />
                        </div>
                        <div>
                                <ActionCard name="Graphic Card" description="Choose your Graphic card." source={logo6} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                <Drop name="Select Category" type="makeBuild" changeC={setGPU} catVal={gpu} products={products.filter(e=>e.category==6)} />
                        </div>
                        <div>
                                <ActionCard name="Cooler" description="Choose your Cooler." source={logo3} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                <Drop name="Select Category" type="makeBuild" changeC={setCooler} catVal={cooler} products={products.filter(e=>e.category==7)} />
                        </div>
                        <div>
                                <ActionCard name="Fans" description="Choose your Fans." source={logo5} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                <Drop name="Select Category" type="makeBuild" changeC={setFan} catVal={fans} products={products.filter(e=>e.category==8)} />
                        </div>
                        <div>
                                <ActionCard name="Casing" description="Choose your Casing." source={logo2} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                <Drop name="Select Category" type="makeBuild" changeC={setCasing} catVal={casing} products={products.filter(e=>e.category==9)} />
                        </div>
                        <div>
                                <button type="submit" className="btn btn-warning mb-4">Submit</button>
                        </div>
                </div>
          </form>
        </div>
        </div>
  )
}


export default MakeBuild;