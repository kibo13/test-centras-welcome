import { firestore, collection, doc, getDocs, addDoc, updateDoc } from './firebase.config';

export async function fetchData(collectioName) {
    let loading = true;
    let data = [];

    try {
        const querySnapshot = await getDocs(collection(firestore, collectioName));
        data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('Error fetching data: ', error);
    } finally {
        loading = false;
    }

    return { data, loading };
}

export async function addData(collectioName, data) {
    try {
        return await addDoc(collection(firestore, collectioName), data);
    } catch (error) {
        console.error('Error adding data to Firestore: ' + error);
        throw error;
    }
}

export async function updateData(collectioName, id, data) {
    try {
        const record = doc(collection(firestore, collectioName), id);
        return await updateDoc(record, data);
    } catch (error) {
        console.error('Error updating data to Firestore: ' + error);
        throw error;
    }
}
