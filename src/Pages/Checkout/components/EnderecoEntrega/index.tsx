import { EnderecoEntregaContainer, EnderecoFormArea } from './styles.ts';
import { MapPinLine } from '@phosphor-icons/react';
import { CheckoutCardHeader } from '../CheckoutCardHeader';

export function EnderecoEntrega() {
    return (
        <EnderecoEntregaContainer>
            <CheckoutCardHeader
                icon={<MapPinLine size={22} color='#C47F17'/>}
                title='Endereço de Entrega'
                subtitle='Informe o endereço onde deseja receber seu pedido'
            />

            <EnderecoFormArea>
                <input id='cep' name='cep' placeholder='CEP'/>
                <input id='rua' name='rua' placeholder='Rua'/>
                <input id='numero' name='numero' placeholder='Número'/>
                <input id='complemento' name='complemento' placeholder='Complemento'/>
                <input id='bairro' name='bairro' placeholder='Bairro'/>
                <input id='cidade' name='cidade' placeholder='Cidade'/>
                <input id='uf' name='uf' placeholder='UF'/>
            </EnderecoFormArea>
        </EnderecoEntregaContainer>
    )
}