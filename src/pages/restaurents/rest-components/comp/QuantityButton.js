import React from 'react'
import { useGlobalLoginContext } from '../../../../context/LoginContext'

const QuantityButton = ({items}) => {
    const {onAdd, onRemove} = useGlobalLoginContext();
    console.log(items)
    return (
        <div>
            <div className="cart-price-btn">
                    <button
                      className="cart-item-remove"
                      onClick={() => onRemove(items)}
                    >
                      -
                    </button>
                    <div className="cart-item-qty">{items.qty}</div>
                    <button
                      className="cart-item-add"
                      onClick={() => onAdd(items)}
                    >
                      +
                    </button>
                  </div>
        </div>
    )
}

export default QuantityButton
