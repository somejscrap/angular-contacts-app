import { Transition } from "@uirouter/angular";

import { List } from "./components/list/list";
import { Edit } from "./components/edit/edit";
import { View } from "./components/view/view";
import { StorageService } from "./services/storage.service";


export const listState = {
  name: 'list',
  url: '/list',
  component: List
};

export const editState = {
  name: 'edit',
  url: '/edit/:itemId',
  component: Edit,
  resolve: [
    {
      token: 'itemId',
      deps: [Transition, StorageService],
      resolveFn: (trans) => trans.params().itemId
    }
  ]
};

export const viewState = {
  name: 'view',
  url: '/view/:itemId',
  component: View,
  data: {
    protected: true
  },
  resolve: [
    {
      token: 'itemId',
      deps: [Transition, StorageService],
      resolveFn: (trans) => trans.params().itemId
    }
  ]
};