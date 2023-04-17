import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from './Button'

const Header = ({onSubmit, todo}) => {
    
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [date, setDate] = useState('')
    
    useEffect(() => {
        if(todo){
            setTitle(todo.title)
            setDetail(detail.title)
            setDate(date.title)
        }
    },[todo])


    const handleSubmit = (e) => {
        e.preventDefault();

        if(todo){
            onSubmit(todo.id, title, detail, date)
        } else {
            onSubmit(null, title, detail, date)
        }
        setTitle('')
        setDetail('')
        setDate('')
    }


    return (
    <>
    <Button />
    <section className='sec-div'>
        <form className='form-div' onSubmit={handleSubmit}>
            <div className='form-control'>
                <h4>Title</h4>
                <input 
                type='text'
                id='title'
                className='todo'
                name='title'
                value={title}
                onChange={e => setTitle(e.target.value)}
                 />
                 <h4> Details </h4>
                 <input
                 type='text'
                 id='detail'
                 className='todo'
                 name='detail'
                 value={detail}
                 onChange={e => setDetail(e.target.value)}
                 />
                 <h4> Date </h4>
                 <input 
                 type='date'
                 id='date'
                 className='todo'
                 name='date'
                 value={date}
                 onChange={e => setDate(e.target.value)}
                 />
            </div>
            <button className='submit-btn' type='submit'>{}</button>
        </form>

    </section>
    </>
  )
}

export default Header