/*
 * @Descripttion: useSelect(原mixin)  类型待优化
 * @version:
 * @Author: June
 * @Date: 2023-04-23 21:10:05
 * @LastEditors: 秦少卫
 * @LastEditTime: 2024-06-10 20:11:48
 */
import Editor from '@kuaitu/core';
import { useI18n } from 'vue-i18n';
import { type Selector } from './useSelectListen';

export default function useSelect() {
  const fabric = inject('fabric');
  const { t } = useI18n();
  const canvasEditor = inject('canvasEditor') as Editor;
  const mixinState = inject('mixinState') as Selector;

  return {
    fabric,
    canvasEditor,
    mixinState,
    t,
  };
}
