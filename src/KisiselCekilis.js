import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './KisiselCekilis.css'
import Header from './Header';

const KisiselCekilis = (props) => {

    const [katilimci, setKatilimci] = useState("");
    const [katilimcilar, setKatilimcilar] = useState("");
    const [cekilisSonuc, setCekilisSonuc] = useState("");

    const katilimciEkle = (e) => {
        e.preventDefault();

        if (!katilimci) {
            toast.error("Lütfen Katılımcı Giriniz...");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: katilimci
        }

        setKatilimcilar(eskiKatilimcilar => [...eskiKatilimcilar, item]);
        setKatilimci("");

    }

    const cekilisiYap = (e) => {
        e.preventDefault();
        if (!katilimcilar) {
            toast.warn("Lütfen Katılımcı Ekleyiniz...");
            return;
        }

        setCekilisSonuc(katilimcilar[Math.floor(Math.random() * katilimcilar.length)].value);

    }

    return (
        <div className='container mt-2'>
            <Header username={props.user.displayName} usermail={props.user.email} userPhotoURL={props.user.photoURL} />
            <form className='form-group text-center'>
                <div className='d-flex mt-4 align-items-center justify-content-around'>
                    <label style={{ width: '19%' }} className='mt-2 font-weight-bold' >Katılımcı:</label>
                    <input style={{ backgroundColor: 'white', color: 'black', width: '55%' }} className='form-control' type='text' value={katilimci} onChange={(e) => setKatilimci(e.target.value)} />
                    <button style={{ width: '20%' }} id='cekilisButton' className='btn text-white' onClick={katilimciEkle}>Çekilişe Ekle!</button>
                </div>
            </form>
            <ToastContainer />
            <div className='container mt-5'>
                <table className="table table-light table-striped table-hover">
                    <thead className="thead">
                        <tr>
                            <th className='bg-dark text-white border-0' scope="col">KATILIMCILAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(katilimcilar)
                            ? katilimcilar.map((kisi) => {
                                return <tr>
                                    <td key={kisi.id}>
                                        {kisi.value}
                                    </td>
                                </tr>;
                            })
                            : null}
                    </tbody>
                </table>
            </div>
            <div className='container'>
                <button className='btn btn-success text-white mt-3 w-100' onClick={cekilisiYap}>ÇEKİLİŞİ YAP!</button>
            </div>
            {cekilisSonuc ?
                <div className='container mt-5 p-5' style={{ backgroundColor: 'white', borderRadius: '12px' }}>
                    <h1 className='text-success text-center' key={cekilisSonuc}><span className='h5 mr-3 text-dark'>KAZANAN:</span> {cekilisSonuc} </h1>
                </div>
                :
                null}
        </div>
    )
}

export default KisiselCekilis
