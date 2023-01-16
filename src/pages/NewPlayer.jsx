import { redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import NewPlayerForm from '../components/NewPlayerForm';
import { savePlayer } from '../util/api';


const NewPlayer = () => {
    const data = useActionData();

    return (
        <>  
            <NewPlayerForm />
        </>
    )
}

export default NewPlayer;

export async function action({request}) {

    const formData = await request.formData();
    const player = {
        name: formData.get('playerName'),
        league: formData.get('league'),
        image: formData.get('imageUrl')
    }

    try {
        await savePlayer(player);
    } catch (err) {
        throw err;
    }

    return redirect('/');
}