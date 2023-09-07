import store from '../../../features/store'; // Importa o store

const SetLocalStorageProducts = () => {
  const state = store.getState().productsOnCart.productsOnCart; // Obtém o estado atual do store
  // ...
  localStorage.setItem("myproducts", null)
  localStorage.setItem("myproducts", JSON.stringify(state));
};

export default SetLocalStorageProducts;