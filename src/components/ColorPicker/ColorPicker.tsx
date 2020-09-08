import React, { useState, useEffect } from 'react'
import tinycolor from 'tinycolor2'

import {
  Color,
  HslColor,
  ColorObject,
  AlphaType,
  HsvColor,
  ColorCombination,
  Theme
} from '../../types'

import { initColor, getColorCombination } from './helper'
import themes from '../../themes'

import Hue from '../Hue/Hue'
import Alpha from '../Alpha/Alpha'
import Value from '../Value/Value'
import ColorList from '../ColorList/ColorList'
import Saturation from '../Saturation/Saturation'
import HexInput from '../HexInput/HexInput'

import * as styles from './ColorPicker.style'
import PresetList from '../PresetList/PresetList'

export interface ColorPickerProps {
  theme?: Partial<Theme>
  color?: Color
  presets?: Color[]
  onChange?: (color: ColorObject) => void
  hideAlpha?: boolean
  hideInputs?: boolean
  combinations?: ColorCombination | ColorCombination[]
  className?: string
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  theme,
  color,
  presets,
  onChange,
  hideAlpha,
  hideInputs,
  className,
  combinations
}) => {
  const [col, setCol] = useState<ColorObject>(initColor(color))

  useEffect(() => {
    onChange && typeof onChange === 'function' && onChange(col)
  }, [col])

  const updateHue = (_hsl: HslColor) => {
    const _color = tinycolor({ h: _hsl.h, s: _hsl.s, l: _hsl.l })

    setCol({
      hsl: { ...col.hsl, h: _hsl.h },
      rgb: { ..._color.toRgb(), a: _hsl.a },
      hex: _color.toHexString(),
      hsv: { ...col.hsv, h: _color.toHsv().h },
      alpha: _hsl.a
    })
  }

  const updateSaturation = (_hsv: HsvColor) => {
    const _color = tinycolor({ h: _hsv.h, s: _hsv.s, v: _hsv.v })

    setCol({
      hsl: { ..._color.toHsl(), h: hsl.h, a: _hsv.a },
      rgb: { ..._color.toRgb(), a: _hsv.a },
      hex: _color.toHexString(),
      hsv: _hsv,
      alpha: _hsv.a
    })
  }

  const updateHex = (_hex: string) => {
    const _color = tinycolor(_hex)

    setCol({
      hsl: { ..._color.toHsl(), h: hsl.h, a: hsv.a },
      rgb: { ..._color.toRgb(), a: hsv.a },
      hex: _hex,
      hsv: _color.toHsv(),
      alpha: _color.getAlpha()
    })
  }

  const updateAlpha = (_alpha: AlphaType) => {
    setCol((prev) => ({
      ...prev,
      rgb: { ...prev.rgb, a: _alpha },
      hsl: { ...prev.hsl, a: _alpha },
      hsv: { ...prev.hsv, a: _alpha },
      alpha: _alpha
    }))
  }

  // const updateRgba = (rgba: RgbColor) => {
  //   const { a, ...rgb } = rgba
  //   const color = tinycolor(rgb)

  //   setCol((prev) => ({
  //     ...prev,
  //     rgb: { ...rgb, a },
  //     hex: color.toHexString(),
  //     hsl: { ...color.toHsl(), a },
  //     hsv: { ...color.toHsv(), a },
  //     alpha: a
  //   }))
  // }

  const { rgb, hsl, hsv, hex, alpha } = col

  const variables = {
    '--rpc-background': theme?.background || themes.light.background,
    '--rpc-color': theme?.color || themes.light.color,
    '--rpc-border-color': theme?.borderColor || themes.light.borderColor,
    '--rpc-border-radius': theme?.borderRadius || themes.light.borderRadius,
    '--rpc-box-shadow': theme?.boxShadow || themes.light.boxShadow,
    '--rpc-width': theme?.width || themes.light.width
  } as React.CSSProperties

  const colorVariables = {
    '--rpc-hue': hsl.h,
    '--rpc-red': rgb.r,
    '--rpc-green': rgb.g,
    '--rpc-blue': rgb.b,
    '--rpc-hex': hex,
    '--rpc-alpha': alpha,
    '--rpc-rgba': `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`,
    '--rpc-hue-pointer': `${(hsl.h * 100) / 360}%`,
    '--rpc-alpha-pointer': `${alpha * 100}%`,
    '--rpc-saturation-pointer-top': `calc(${-(hsv.v * 100) + 100}% - 5px)`,
    '--rpc-saturation-pointer-left': `calc(${hsv.s * 100}% - 5px)`
  } as React.CSSProperties

  return (
    <div style={{ ...variables, ...styles.container }} className={className}>
      <div style={colorVariables}>
        <Saturation hsl={hsl} onChange={updateSaturation} />

        <div style={styles.flex}>
          <Value />

          <div style={styles.ranges}>
            <Hue hsl={hsl} onChange={updateHue} />
            {!hideAlpha && <Alpha rgb={rgb} onChange={updateAlpha} />}
          </div>
        </div>

        {!hideInputs && (
          <div style={styles.inputs}>
            <HexInput value={hex} name='hex' onChange={updateHex} />
            {/* <RgbaInput
              value={rgb}
              onChange={updateRgba}
              hideAlpha={hideAlpha}
            /> */}
          </div>
        )}

        {presets && (
          <PresetList
            colors={presets}
            onClick={(val) => setCol(initColor(val))}
            currentColor={col.rgb}
          />
        )}

        {combinations && (
          <ColorList
            colors={getColorCombination(col, combinations)}
            onClick={(val) => setCol(initColor(val))}
          />
        )}
      </div>
    </div>
  )
}

export default ColorPicker
