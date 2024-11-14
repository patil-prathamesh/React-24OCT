import { useCallback, useState } from "react"

export function Callback() {
    const items = [
        {
            id: 1,
            title: 'item 1',
            count: 0
        },
        {
            id: 2,
            title: 'item 2',
            count: 0
        },
        {
            id: 3,
            title: 'item 3',
            count: 0
        },
        {
            id: 4,
            title: 'item 4',
            count: 0
        }
    ]

    const [itemList,setItemList] = useState(items)

    const handleClick = (id)=>{
        setItemList((prevItems) => {
             prevItems.map((item) => {
                item.id == id ? {...item, count: item.count+1} : item 
             })
        })
        console.log(itemList)
    }
    return (
        <div>
            {
                items.map((item) => <Items key = {item.id} item={item} handleClick={handleClick}/>)
            }
        </div>
    )
}

function Items({item, handleClick}) {
    return (
        <div>
            <h1>{item.title}</h1>
            <button onClick={() => {
                console.log(item.id)
                handleClick(item.id)
            }}>Count {item.count}</button>
        </div>
    )
}