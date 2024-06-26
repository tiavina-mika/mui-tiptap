import { EditorOptions } from "@tiptap/react";
import { ReactNode } from "react";

type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export enum EditorToolbarEnum {
  heading = 'heading',
  bold = 'bold',
  italic = 'italic',
  strike = 'strike',
  link = 'link',
  underline = 'underline',
  image = 'image',
  code = 'code',
  orderedList = 'orderedList',
  bulletList = 'bulletList',
  align = 'align',
  codeBlock = 'codeBlock',
  blockquote = 'blockquote',
  table = 'table',
  history = 'history',
  youtube = 'youtube',
  color = 'color',
  mention = 'mention',
  ai = 'ai'
}

export type IEditorToolbar = `${EditorToolbarEnum}`;

export type IRequiredLabels = {
  editor: {
    editor: string;
    preview: string;
  };
  toolbar: {
    bold: string;
    italic: string;
    strike: string;
    underline: string;
    link: string;
    bulletList: string;
    orderedList: string;
    alignLeft: string;
    alignCenter: string;
    alignRight: string;
    alignJustify: string;
    blockquote: string;
    codeBlock: string;
    table: string;
    youtube: string;
    undo: string;
    redo: string;
    mention: string;
  };
  headings: {
    normalText: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  table: {
    table: string;
    insertTable: string;
    addColumnBefore: string;
    addColumnAfter: string;
    deleteColumn: string;
    addRowBefore: string;
    addRowAfter: string;
    deleteRow: string;
    mergeCells: string;
    splitCell: string;
    deleteTable: string;
    toggleHeaderColumn: string;
    toggleHeaderRow: string;
    toggleHeaderCell: string;
    mergeOrSplit: string;
    setCellAttribute: string;
  };
  link: {
    link: string;
    insert: string;
    invalid: string;
    enter: string;
  };
  youtube: {
    link: string;
    insert: string;
    title: string;
    invalid: string;
    enter: string;
    height: string;
    width: string;
  };
};

export type ILabels = DeepPartial<IRequiredLabels>;

export interface ITextEditorOption<T = string> {
  label: string;
  value: T,
  icon?: string | ReactNode;
  hide?: boolean;
}

export type TextEditorProps = {
  placeholder?: string;

  /**
   * input label
   * NOTE: it is placed above the tabs
   */
  label?: ReactNode;

  /**
   * error message to be displayed if any
   */
  error?: string;

  /**
   * value of the editor
   * it's an html string, eg: <p>hello world</p>
   */
  value?: string;

  /**
   * callback function to be called on change
   * it returns the html string of the editor, eg: <p>hello world</p>
   */
  onChange?: (value: string) => void;

  /**
   * input style override
   * it's the responsible of the whole input grey border and border radius
   *
   */
  inputClassName?: string;

  /**
   * toolbar style override,
   * it's mainly the responsible of the toolbar border top
   */
  toolbarClassName?: string;

  /**
   * tabs style override
   * the tabs 'editor' and 'preview' style
   */
  tabsClassName?: string;

  /**
   * tab style override
   * mainly used for the styles of the current selected tab
   */
  tabClassName?: string;

  /**
   * error message style override
   * eg: changing the color of the error message
   * or its font size
   */
  errorClassName?: string;

  /*
    * root class name
    * it's the main class name of the all the editor
    * label, tabs, input, toolbar, etc
  */
  rootClassName?: string;

  /**
   * label styles override
   * eg: changing the color of the label, its font size, color, etc
   */
  labelClassName?: string;

  /**
   * if true, floating menu will be disabled
   */
  withFloatingMenu?: boolean;

  /**
   * if true, bubble menu will be displayed
   */
  withBubbleMenu?: boolean;

  /**
   * toolbar (each icon) to be displayed
   *
   * possible values are: [
   * "heading", "bold", "italic", "strike", "link", "underline", "image", "code",
   * "orderedList", "bulletList", "align", "codeBlock", "blockquote", "table",
   * "history", "youtube", "color", "mention"
   * ]
   *
   * default values is all the above
   */
  toolbar?: IEditorToolbar[];

  /**
   * toolbar (each icon) to be displayed in bubble menu
   *
   * default values are: ['bold', 'italic', 'underline', 'link']
   */
  bubbleMenuToolbar?: IEditorToolbar[];

   /**
   * toolbar (each icon) to be displayed in floating menu
   *
   * default values are: ['bold', 'italic', 'underline', 'link']
   */
  floatingMenuToolbar?: IEditorToolbar[];

  /**
   * user object for collaboration
   * the current user or selected user used for collaboration
   *
   * eg: { label: 'John Doe', value: 'some_user_id' }
   */
  user?: ITextEditorOption;

  /**
   * list of users used for mentions
   *
   * eg. [{ label: 'John Doe', value: 'some_user_id' }, { label: 'James Smith', value: 'some_user_id_2' }, ...]
   * NOTE: the value should be unique, it's used for profile url
   * ex: /profile/:id or /profile/:slug, :id or :slug here is the value
   */
  mentions?: ITextEditorOption[];

  /**
   * user pathname for the mentioned user
   *
   * eg. /profile
   * so the final url will be /profile/:id
   * :id here is the value in mentions array (see above)
   * the final element is something like: <a href="/profile/some_user_id">{mentioned_user}</a>
   */
  userPathname?: string;

  /**
   * override labels
   * it's useful for i18n or changing the default labels
   */
  labels?: ILabels;
} & Partial<EditorOptions>;
