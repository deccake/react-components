import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // const movies = _.take(items, startIndex);
    return _(items).slice(startIndex).take(pageSize).value();
    
}