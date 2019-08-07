import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }){
  try {
    const { name, email, avatar_id, ...rest } = payload.data;
    console.tron.log('1');
    const profile = Object.assign(
        { name, email, avatar_id }, 
        rest.oldPassword ? rest : {}
      );
      console.tron.log('2');
    const response = yield call(api.put, 'users', profile);
    console.tron.log('3');  
    toast.success('Perfil atualizado com sucesso');
    console.tron.log('4');
    yield put(updateProfileSuccess(response.data));
    console.tron.log('5');
  } catch (err) {

      toast.error('Erro ao atualizar');
      yield put(updateProfileFailure());

  }


}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);