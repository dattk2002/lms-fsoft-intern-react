/* eslint-disable no-param-reassign */
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { SafeAny } from 'src/app/core-component/models/any';
import { PageableResponse } from 'src/app/core-component/models/pageable.model';

/**
 *
 * In case of there are multiple services that consume the Model from API, only a single change is required to apply it to all services.
 *
 * And in case Back-End model change field "name" into "title"
 *
 * Example: Case we need to change the binding at the view to be “title” instead of “name” of TodoModel,
 *          To use the decorator
 *              @propertyMap('title')
 *              public name: string;
 *          The updated service looks like the below.
 *              return this.http.get<TodoModel[]>(this.url).pipe(
 *                  map(data => data.map((item: SafeAny) => {
 *                      return new ModelMapper(TodoModel).map(item);
 *              })));
 * Benefits: With the implementation of the below decorators, when the back-end data field is renamed or changed,
 * there is no need to change the service code. The only change required is to update thePropertyMap decorator meta-data argument
 * in model class.
 */
export class ModelMapper<T> {
    _propertyMapping: SafeAny;

    _target: SafeAny;

    constructor(Type: new () => T) {
        this._target = new Type();
        this._propertyMapping = this._target.constructor._propertyMap;
    }

    map(source: any) {
        Object.keys(this._target).forEach((key) => {
            const mappedKey = this._propertyMapping[key];
            if (mappedKey) {
                this._target[key] = source[mappedKey];
            } else {
                this._target[key] = source[key];
            }
        });
        Object.keys(source).forEach((key) => {
            const targetKeys = Object.keys(this._target);
            if (targetKeys.indexOf(key) === -1) {
                this._target[key] = source[key];
            }
        });
        return this._target;
    }
}

/**
 * To handle the case of backend data field renaming, we created the PropertyMap decorator and ModelMapper utility class.
 * @param sourceProperty
 */
export function propertyMap(sourceProperty: string) {
    // eslint-disable-next-line func-names
    return function (target: SafeAny, propertyKey: string) {
        if (!target.constructor._propertyMap) {
            target.constructor._propertyMap = {};
        }
        target.constructor._propertyMap[propertyKey] = sourceProperty;
    };
}
export const modelMapping = (modelType: any) => (src: Observable<SafeAny>) =>
    src.pipe(pluck('data')).pipe(
        map((res: PageableResponse<SafeAny>) => {
            res.content = res.content.map((item?: any) => new ModelMapper(modelType).map(item));
            return res;
        })
    );
