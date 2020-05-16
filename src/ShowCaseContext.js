import React, { Component } from 'react'
import { storeDesign, detailDesign } from './data'
import {ShowCaseContext} from './Contetxts'


export class ShowCaseContextProvider extends Component {
    state = {
        /* design: storeDesign, */
        designs: [],
        detailDesign: detailDesign,
        cart: [],
        selecetedDesign: [],
        modalOpen: false,
        modalDesign: detailDesign,
        //setup states for the cart component
        cartSubTotal: 0,
        cartTotal: 0,
        cartTax: 0
    };

    componentDidMount(){
        this.setDesigns();
    }

    setDesigns = () =>{
        let designsCopy = [];
        storeDesign.forEach(item => {
            const singleDesign = {...item};
            designsCopy = [...designsCopy, singleDesign];
        });
        this.setState(()=>{
            return{
                designs: designsCopy,
                detailDesign: detailDesign
            }
        });
    }
        
    openModal = id =>{
        const design = this.getSelectedDesign(id);
        this.setState(()=>{
            return{
                modalDesign:design,
                modalOpen: true
            }
        });
    }

    closeModal = () =>{
        this.setState(()=>{
            return { modalOpen:false }
        });
    }

    getSelectedDesign = id =>{
       const design = this.state.designs.find(item => item.id === id);
        return design;
    }
    handleDetail = (id) =>{
       this.setState(()=>{
           const selecetedDesign = this.getSelectedDesign(id);
            return { detailDesign: selecetedDesign };
       })
    };
    addToCart = (id) =>{
        let copyDesigns = [...this.state.designs];
        const index = copyDesigns.indexOf(this.getSelectedDesign(id));
        const cartDesign = copyDesigns[index];
        cartDesign.inCart = true;
        const price =  cartDesign.price;
        cartDesign.total = price;
        cartDesign.count = 1;
        this.setState(() =>{
            return{selecetedDesign:[cartDesign], cart: [...this.state.cart, cartDesign]};
        }, 
        () => {
            this.calcTotal()
        });
    };

    increament = (id) =>{
        let snapCart = [...this.state.cart];
        const selectedItem = snapCart.find(item => item.id === id);
        const index = snapCart.indexOf(selectedItem);
        const designItem = snapCart[index];
        designItem.count = designItem.count + 1;
        designItem.total = designItem.count * designItem.price;

        this.setState(()=>{
            return{
                cart: [...snapCart]
            }
        },
        () => {
            this.calcTotal()
        });
    }
    
    decreament = (id) =>{
        let snapCart = [...this.state.cart];
        const selectedItem = snapCart.find(item => item.id === id);
        const index = snapCart.indexOf(selectedItem);
        const designItem = snapCart[index];
        if(designItem.count !== 0){
            designItem.count = designItem.count - 1;
        }
        designItem.total = designItem.count * designItem.price;

        this.setState(()=>{
            return{
                cart: [...snapCart]
            }
        },
        () => {
            this.calcTotal()
        });
    }

    removeItem = (id) =>{
        let snapDesigns = [...this.state.designs];
        let snapCart = [...this.state.cart];
        snapCart = snapCart.filter(item => item.id !== id);
        const itemIndex = snapDesigns.indexOf(this.getSelectedDesign(id));
        let removedDesign = snapDesigns[itemIndex]; 
        removedDesign.inCart = false;
        removedDesign.count = 0;
        removedDesign.total = 0;
        this.setState(()=>{
            return{
                cart: [...snapCart],
                designs: [...snapDesigns]
            }
        },()=>{
            this.calcTotal()
        })
    }

    clearCart = () =>{
        this.setState(()=>{
            return{
                cart: [],
            }
        }, ()=>{
            this.setDesigns();
            this.calcTotal();
        });
    }

    calcTotal = ()=>{
        let subTotal = 0;
        this.state.cart.map(item => (subTotal +=item.total));
        const taxCalc = subTotal * 0.1;
        const tax = parseFloat(taxCalc.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return{
                 cartSubTotal:subTotal,
                 cartTax: tax,
                 cartTotal:total
            };
        })
    }

    render() {
        return (
            <ShowCaseContext.Provider value={
                {...this.state, 
                    handleDetail:this.handleDetail, 
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increament:this.increament,
                    decreament:this.decreament,
                    removeItem:this.removeItem,
                    clearCart:this.clearCart
                }
            }>
            {this.props.children}
            </ShowCaseContext.Provider>
        );
    }
}
export const ShowCaseContextConsumer = ShowCaseContext.Consumer;
