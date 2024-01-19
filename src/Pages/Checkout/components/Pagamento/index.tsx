import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'

import { CheckoutCardContainer } from '../../styles.ts'
import { CheckoutCardHeader } from '../CheckoutCardHeader'
import { PaymentOptionsArea } from './styles.ts'

export function Pagamento() {
    return (
        <CheckoutCardContainer>
            <CheckoutCardHeader
                icon={<CurrencyDollar size={22} color="#8047F8"/>}
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <PaymentOptionsArea>
                <button>
                    <CreditCard size={16} color="#8047F8" />
                    Cartão de Crédito
                </button>
                <button>
                    <Bank size={16} color="#8047F8" />
                    Cartão de Débito
                </button>
                <button>
                    <Money size={16} color="#8047F8" />
                    Dinheiro
                </button>
            </PaymentOptionsArea>
        </CheckoutCardContainer>
    )
}