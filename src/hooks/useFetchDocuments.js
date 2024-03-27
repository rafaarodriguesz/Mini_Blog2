import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, onSnapshot, where, orderBy, getDocs } from 'firebase/firestore'

export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {

        const getUsers = async () => {

            if (cancelled) return

            setLoading(true);

            const userCollectionRef = collection(db, docCollection);

            try {
                let q;

                if (search) {
                    q = await query(userCollectionRef, where("tagsArray", "array-contains", search), orderBy("creteAt", "desc"))
                } else if (uid) {
                    q = await query(userCollectionRef, where("uid", "==", uid), orderBy("creteAt", "desc"))

                } else {
                    q = await getDocs(userCollectionRef);
                    setDocuments(q.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    })))
                }


            } catch (error) {

            }

        }
        getUsers();
    }, [])

    return { documents, loading, error };
}