/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import db from './firebase';
import './GenelCekilis.css';
import Header from './Header';

function GenelCekilis(props) {
    const [name, setName] = useState(props.user.displayName);
    const [email, setEmail] = useState(props.user.email);
    const [photo, setPhoto] = useState(props.user.photoURL);
    const [kisiler, setKisiler] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const add = (e) => {
        e.preventDefault();
        setCheckbox(false);
        document.getElementById("sozlesme").checked = false;
        var kayitDurum = true
        kisiler.map((veri) => {
            if (email == veri.data.email) {
                kayitDurum = false
            }
        })
        if (kayitDurum) {
            db.collection("kisiler").add({
                name: name,
                email: email,
                photo: photo
            })
        }
        else {
            toast.error('Çekilişe daha önceden katıldınız...');
        }
    }

    useEffect(() => {
        db.collection("kisiler").onSnapshot((snapshot) => setKisiler(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        ))
    }, [])

    const checkValue = (e) => {
        if (checkbox) {
            setCheckbox(false);
        }
        else {
            setCheckbox(true);
        }
    }

    return (
        <div className="container mt-2">
            <Header username={props.user.displayName} usermail={props.user.email} userPhotoURL={props.user.photoURL} />
            <form className='form-group text-center'>
                <div className='d-flex mt-4'>
                    <label style={{ width: '30%', color: 'red' }} className='mt-2 font-weight-bold' >İsminiz ve Soyisminiz:</label>
                    <input style={{ backgroundColor: '#2e9599', color: 'white' }} disabled className='form-control' type='text' value={props.user.displayName} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='d-flex mt-3'>
                    <label style={{ width: '30%', color: 'red' }} className='mt-2 font-weight-bold' >E-Mail Adresiniz:</label>
                    <input style={{ backgroundColor: '#2e9599', color: 'white' }} className='form-control' disabled type='text' value={props.user.email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input-group-text mt-3">
                    <input id='sozlesme' onClick={checkValue} type="checkbox" className='mr-1' /> Çekiliş sözleşmesini okudum, kabul ediyorum.<span style={{ color: 'red' }}> *</span>
                </div>
                {
                    checkbox ?
                        <button id='cekiliseKatil' style={{ backgroundColor: 'red' }} className='btn text-white mt-3 w-100' onClick={add}>ÇEKİLİŞE KATIL !</button>
                        :
                        <button disabled id='cekiliseKatil' style={{ backgroundColor: 'red' }} className='btn text-white mt-3 w-100' onClick={add}>ÇEKİLİŞE KATIL !</button>
                }
            </form>
            <div className='mt-5'>
                <hr />
                <h4>Katılımcılar</h4>
                <div className="table-responsive">
                    <table className="table table-light table-striped table-hover">
                        <thead className="thead">
                            <tr>
                                <th scope="col">Katılımcı</th>
                                <th scope="col">Email Adresi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(kisiler)
                                ? kisiler.map(({ id, data: { name, email, photo } }) => {
                                    return <tr>
                                        <td><img className="img-fluid rounded-circle mr-2" src={`${photo}`} width="30px" alt='You should use chrome' /> {name}</td>
                                        <td>{email}</td>
                                    </tr>;
                                })
                                : null}
                        </tbody>
                    </table>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default GenelCekilis
