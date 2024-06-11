import React, { useEffect, useState } from 'react';
import supabase from '../../db/clientSupabase';
import './Uncards.css';

const Uncards = () => {
  const [uncards, setUncards] = useState([]);
  const [editUncardId, setEditUncardId] = useState(null);

  useEffect(() => {
    const fetchUncards = async () => {
      const { data, error } = await supabase
        .from('cards')
        .select('*');

      if (error) {
        console.error('Error fetching uncards:', error);
      } else {
        setUncards(data);
      }
    };

    fetchUncards();
  }, []);


  const handleDeleteUncard = async (id) => {
    const { error } = await supabase
      .from('cards')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting uncard:', error);
    } else {
      setUncards(uncards.filter(uncard => uncard.id !== id));
    }
  };

  return (
    <div className="uncard-list">
      {uncards.map(uncard => (
        <div className="uncard" key={uncard.id}>
            <>
              <img src={uncard.img_url} alt={uncard.title} className="uncard-img" />
              <div className="uncard-content">
                <h3>{uncard.title}</h3>
                <p>{uncard.description}</p>
                <button onClick={() => handleDeleteUncard(uncard.id)}>Delete</button>
              </div>
            </>
        </div>
      ))}
    </div>
  );
};

export default Uncards;