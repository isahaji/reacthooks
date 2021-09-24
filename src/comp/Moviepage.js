import React from 'react'
import { Rating } from '@material-ui/lab'
import { useParams } from 'react-router'

const Moviepage = () => {
    const {title, description, posterURL, rating} = useParams()
    return (
        <div>
            <div>
        <Rating name="size-small" defaultValue={rating} size="small" precision={0.5}/>
</div>

<div className="">{description}</div>

<h1 className="">{title}</h1>
        </div>

    )
}

export default Moviepage
