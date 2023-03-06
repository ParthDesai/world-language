/******************************************************************************
 * This file was generated by langium-cli 1.1.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumGeneratedSharedServices, LangiumSharedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { WorldsAstReflection } from './ast';
import { WorldsGrammar } from './grammar';

export const WorldsLanguageMetaData: LanguageMetaData = {
    languageId: 'worlds',
    fileExtensions: ['.world'],
    caseInsensitive: false
};

export const WorldsGeneratedSharedModule: Module<LangiumSharedServices, LangiumGeneratedSharedServices> = {
    AstReflection: () => new WorldsAstReflection()
};

export const WorldsGeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => WorldsGrammar(),
    LanguageMetaData: () => WorldsLanguageMetaData,
    parser: {}
};
