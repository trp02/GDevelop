// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdParameterMetadata {
  constructor(): void;
  getType(): string;
  setType(type_: string): gdParameterMetadata;
  getName(): string;
  setName(name_: string): gdParameterMetadata;
  getExtraInfo(): string;
  setExtraInfo(extraInfo_: string): gdParameterMetadata;
  isOptional(): boolean;
  setOptional(optional_: boolean): gdParameterMetadata;
  getDescription(): string;
  setDescription(description_: string): gdParameterMetadata;
  getLongDescription(): string;
  setLongDescription(longDescription_: string): gdParameterMetadata;
  isCodeOnly(): boolean;
  setCodeOnly(codeOnly_: boolean): gdParameterMetadata;
  getDefaultValue(): string;
  setDefaultValue(defaultValue_: string): gdParameterMetadata;
  static isObject(param: string): boolean;
  static isBehavior(param: string): boolean;
  serializeTo(element: gdSerializerElement): void;
  unserializeFrom(element: gdSerializerElement): void;
  delete(): void;
  ptr: number;
};