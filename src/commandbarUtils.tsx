import ky from 'ky';

export const initCommandbar = (userId: string, cb: any) => {
  window.CommandBar.boot(userId).then(cb);
  window.CommandBar.setTheme('matrix-vibes');
};

const onSearchUsers = (): Promise<any> => {
  return ky.get('/users').json();
};

export const initUserCommand = () => {
  window.CommandBar.addRecords('users', [], {
    labelKey: 'name',
    onInputChange: onSearchUsers,
  });
  window.CommandBar.addRecordAction('users', {
    name: 'search_users',
    text: 'Search',
    template: { type: 'link', value: '{{record.id}}' },
  });
};

const onSearchCars = (): Promise<any> => {
  return ky.get('/cars').json();
};

export const initCarsCommand = () => {
  window.CommandBar.addRecords('cars', [], {
    labelKey: 'name',
    onInputChange: onSearchCars,
  });
  window.CommandBar.addRecordAction('cars', {
    name: 'search_cars',
    text: 'Search',
    template: { type: 'link', value: '{{record.id}}' },
  });
  window.CommandBar.generateDetailPreview((data: any, metadata) => {
    if (metadata.type === 'parameter' && metadata.contextKey === 'cars')
      return `<h2>${data.id}</h2><div>${data.name}</div>`;
    return;
  });
};
